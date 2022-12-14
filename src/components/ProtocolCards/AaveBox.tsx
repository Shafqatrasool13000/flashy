import { useEffect, useId, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FaArrowAltCircleLeft, FaArrowDown, FaCannabis, FaCaretDown } from 'react-icons/fa';
import { useExecMock } from '../../hooks/useExecMock';
import ASelectToken from '../SelectToken/AavaSelect';
import { RateModeStyled } from '../AddCube/style';
import { Spin, Switch } from 'antd';
import { Icon } from '@iconify/react';
import { useFormik, FormikProvider, Form } from 'formik';
import * as Yup from 'yup';
import InputField from '../InputField/InputField';
import { GetBalance } from './GetBalance/Index';
import GetLtv from '../../hooks/GetLtv';
import UseApy from '../../utils/graphql/useApy';
import { LoadingOutlined } from '@ant-design/icons';
import { useEncode } from '../../hooks/useEncode';
import useApprove from '../../hooks/useApprove';
import { toast } from 'react-toastify';
import { BigNumber } from 'ethers';
import useTransfer from '../../hooks/useTransfer';
import useStableToken from '../../hooks/useStableToken';
import useVariableToken from '../../hooks/useVariableToken';
import {
  getTokenAddress,
  getATokenSymbol,
  getStableDebt,
  getTokenDecimals,
  getVariableDebt,
  getATokenAddress
} from './aaveFunctions';
import { parseEther, parseUnits } from 'ethers/lib/utils';
import useDrainToken from '../../hooks/useDrainToken';
import useProtocolContext from '../../hooks/useProtocolContext';
import CustomButton from '../Custom/CustomButton/CustomButton';
import { primaryColor } from '../Global';
import AddProtocolStyled from './style';
import useAllowance from '../../hooks/useAllowance';
import contractsAddress from '../../utils/contractsAddress';

const AaveBox = ({ data, setAddCubeModal }: any) => {
  const protocol_id = useId();
  console.log({ protocol_id });
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  const [isApprove, setIsApprove] = useState(false);

  const {
    userAddress,
    chainId,
    savedProtocols,
    setSavedProtocols,
    setExchageItems,
    addCubeModal,
    exchangeItems,
    allowance: isAllowance,
    setAllowance
  } = useProtocolContext();

  console.log({ isApprove }, 'isApprove');

  // Initial Values

  const initialValues: any = chainId && data?.initialData;

  // validate Values

  const validationSchema = Yup.object({
    amount: Yup.string().required('amount is required')
  });

  // Formik Hanlder
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  // Approve Switcher
  const approveSwitcher = (methodName: string) => {
    switch (methodName) {
      case 'deposit':
        return getTokenAddress(data, chainId, formik);
      case 'withdraw':
        return getATokenAddress(data, chainId, formik);
      default:
        return getTokenAddress(data, chainId, formik);
    }
  };

  // Execution Switcher
  const executionSwitcher = (methodName: string) => {
    switch (methodName) {
      case 'withdraw':
        return getATokenAddress(data, chainId, formik);
      default:
        return null;
    }
  };

  // Eth Methods Switchers

  const EthMethodSwitcher = (methodName: string) => {
    switch (methodName) {
      case 'repayETH':
        return userAddress;
      case 'withdrawETH':
        return '0xe91D55AB2240594855aBd11b3faAE801Fd4c4687';
      case 'borrowETH':
        return userAddress;
      default:
        return null;
    }
  };

  // Hooks

  const bytesEncoder = useEncode();
  const execMock = useExecMock();
  const approve = useApprove();
  const transfer = useTransfer();
  const stableToken = useStableToken();
  const variableToken = useVariableToken();
  const allowance = useAllowance();

  useEffect(() => {
    allowance('0x75Ab5AB1Eef154C0352Fc31D2428Cef80C7F8B33');
  }, [formik.values.amount, data]);

  // Approve Hanlder
  const approveHandler = () => {
    // if (Object.keys(formik.errors).length !== 0) {
    //   (() => toast("plz fill all fields"))();
    //   return;
    // }
    if (formik.values.rateMode) {
      formik.values.rateMode.toNumber() === 1
        ? stableToken(
            contractsAddress.proxyMockAddress,
            parseUnits(formik.values.amount.toString(), getTokenDecimals(data, chainId, formik)),
            getStableDebt(data, chainId, formik),
            getTokenDecimals(data, chainId, formik)
          )
        : variableToken(
            contractsAddress.proxyMockAddress,
            formik.values.amount,
            getVariableDebt(data, chainId, formik),
            getTokenDecimals(data, chainId, formik)
          );
    } else {
      approve(
        approveSwitcher(data.methodName),
        contractsAddress.proxyMockAddress,
        parseUnits(formik.values.amount.toString(), getTokenDecimals(data, chainId, formik))
      );
    }
  };

  // // Transfer Handler

  // const transferHandler = async () => {
  //   if (Object.keys(formik.errors).length !== 0) {
  //     (() => toast("plz fill all fields"))();
  //     return;
  //   }
  //   const result = await transfer(
  //     getTokenAddress(data, chainId, formik),
  //    contractsAddress.proxyMockAddress,
  //     formik.values.amount,
  //     getTokenDecimals(data, chainId, formik)
  //   );
  //   return result;
  // };

  // Execution Handler

  const executionHandler = async () => {
    let finalProtcoloData: any;
    if (data.methodName.includes('ETH')) {
      finalProtcoloData = Object.values(
        formik.values.map((objData: any, index: number) => {
          delete objData['showTokens'];
          return {
            ...objData,
            amount: parseEther(formik.values.amount.toString())
          };
        })
      );
      EthMethodSwitcher(data.methodName) &&
        (finalProtcoloData[0]['others'] = EthMethodSwitcher(data.methodName));
      var encodedBytes = bytesEncoder(contractsAddress.haaveAddress, data.methodName, [
        ...Object.values(finalProtcoloData[0])
      ]);
      // execMock(
      //   contractsAddress.haaveAddress,
      //   encodedBytes,
      //   formik.values.amount
      // );
    } else {
      delete formik.values['showTokens'];
      finalProtcoloData = {
        ...formik.values,
        token: getTokenAddress(data, chainId, formik),
        amount: parseUnits(formik.values.amount.toString(), getTokenDecimals(data, chainId, formik))
      };

      finalProtcoloData['userAddress'] = userAddress;
      executionSwitcher(data.methodName) &&
        (finalProtcoloData['exec'] = executionSwitcher(data.methodName));

      const encodedBytes = bytesEncoder(
        contractsAddress.haaveAddress,
        data.methodName,
        Object.values(finalProtcoloData)
      );
      console.log({ encodedBytes });
      return encodedBytes;
      // execMock(contractsAddress.haaveAddress, encodedBytes);
    }

    console.log(finalProtcoloData);

    // const encoded = encoder(addresses.haaveAddress, "withdrawETH", [
    //   parseEther("0.1"),
    //   "0x22404B0e2a7067068AcdaDd8f9D586F834cCe2c5",
    // ]);
    // const transferred: any = await transferHandler();

    // if (Object.keys(transferred).length !== 0) {
    //   (() => toast("transfer done"))();
    //   setEncodeData([...encodeData, encoded]);
    // }
  };

  // Submit Handler

  async function onSubmit() {
    const encodeData = await executionHandler();
    const newProtocol = { ...data, encodeData };
    newProtocol['initialData'] = formik.values;
    newProtocol['protocol_id'] = protocol_id;

    if (data.methodName == 'flashLoan') {
      setSavedProtocols((oldData: any) => [
        ...oldData,
        {
          'flashLoan-start': true,
          'flashLoan-end': false,
          notDraggable: true,
          ...newProtocol,
          protocol_id: protocol_id
        }
      ]);
      setSavedProtocols((oldData: any) => [
        ...oldData,
        {
          'flashLoan-end': true,
          'flashLoan-start': false,
          notDraggable: true,
          ...newProtocol,
          protocol_id: protocol_id
        }
      ]);
    } else {
      setSavedProtocols((oldData: any) => [...oldData, newProtocol]);
    }
    setExchageItems([]);
  }

  // Token Toggle Handler
  const handleTokensToggle = () => {
    formik.setFieldValue('showTokens', !formik.values.showTokens);
    console.log(formik.values.showTokens, 'show tokens');
  };

  const { totalData, loading, error } = UseApy(
    formik.values.token,
    formik.values.rateMode?.toNumber()
  );

  const { ltvData } = GetLtv(data?.ltv[chainId]);

  if (chainId) {
    for (let i = 0; i < data?.data?.function_configs?.inputs[chainId].length; i++) {
      formik.initialValues.push(...data?.initialData);
    }
  }
  console.log(formik.values, 'formik values');
  // console.log({ totalData, ltvData });
  useEffect(() => {
    if (!loading && chainId) {
      const finalArray: any = [];
      const objectArray = Object.entries(totalData);

      objectArray.forEach(([key, value]) => {
        finalArray.push({ name: key, value });
      });
      finalArray.push(...ltvData);
      const finalData = data?.attributes?.map((obj: { name: string; value: any }) => {
        const { name } = obj;
        var result: any = finalArray.find((item: any) => item.name === name);
        return {
          ...obj,
          value: result?.value
        };
      });
    }
  }, [data, formik.values, loading]);

  const repayHandler = () => {
    formik.values.onBehalfOf = userAddress;
    return null;
  };

  const getAllowance = (amount: number): void => {
    setIsApprove(amount > 0 ? true : false);
  };
  // useEffect(() => {
  //   allowance(
  //     getTokenAddress(data, chainId, formik),
  //     userAddress,
  //    contractsAddress.proxyMockAddress,
  //     getAllowance
  //   );
  // }, [formik.values]);

  // console.log(getAllowance(), "allowance in add protocol");

  console.log(data.methodName.includes('Eth'), 'includes eth');
  return (
    <FormikProvider value={formik}>
      <Form>
        <AddProtocolStyled className="position-relative">
          <FaArrowAltCircleLeft
            onClick={() => {
              setExchageItems([]);
              setAddCubeModal(true);
            }}
            className="back-icon"
            fontSize={26}
          />
          <div className="d-flex justify-content-center">
            <h6 className="text-center">
              <FaCannabis fontSize={20} className="vertical-align-top" />
              <span className="ms-2 fs-4">{data.protocolName}</span>
            </h6>
          </div>
          <div className="d-flex justify-content-center">
            <button className="method-btn w-100 mt-3 fs-6">{data.name}</button>
          </div>

          {/* ({ rateMode, onBehalfOf, modes }: any, index: number) => { */}
          {/* <FieldArray name="tickets">
            
          </FieldArray> */}
          <div className="input-section mt-3">
            {data.methodName.includes('ETH') ? (
              <>
                <p className="label m-0">Amount</p>
                <div>
                  <InputField name="amount" type="number" placeholder="Amount" textAlign="start" />
                </div>
              </>
            ) : (
              <>
                {data.initialData.onBehalfOf && (
                  <div className="mt-2">
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      value={formik.values.onBehalfOf}
                      id="address"
                      onChange={(event) => formik.setFieldValue('onBehalfOf', event.target.value)}
                      placeholder="ENS or Address"
                      className="w-100 mt-2 meta-address"
                    />
                  </div>
                )}
                <Row className="align-items-center">
                  <Col md={4}>
                    <p className="input">input</p>
                    <div className="d-flex align-items-center mb-2">
                      <h6 className="position-relative">
                        <span className="me-2">
                          <Icon
                            icon={
                              data?.function_configs.tokens[chainId]?.find(
                                ({ symbol }: any) => symbol === formik.values.token
                              )?.icon
                            }
                            width="24"
                            height="24"
                            color="white"
                          />
                        </span>
                        {formik.values.token}
                        <span>
                          <FaCaretDown
                            className="more-icon"
                            fontSize={14}
                            onClick={() => {
                              handleTokensToggle();
                            }}
                          />
                        </span>
                      </h6>
                    </div>
                    <div
                      className={`position-absolute ${
                        formik.values.showTokens ? 'd-block' : 'd-none'
                      }`}>
                      <ASelectToken
                        showTokens={formik.values.showTokens}
                        tokens={data?.function_configs.tokens[chainId]}
                        name="token"
                        formik={formik}
                        handleTokensToggle={handleTokensToggle}
                      />
                    </div>
                    <span
                      className={`input-text ${
                        data?.hasOwnProperty('isFlashloan') ? 'd-none' : 'd-block'
                      }`}>
                      <FaArrowDown />
                    </span>
                  </Col>
                  <Col md={8}>
                    <InputField name="amount" type="number" placeholder="Amount" textAlign="end" />

                    <div className="d-flex justify-content-end mt-4">
                      <GetBalance
                        token={
                          data?.function_configs.tokens[chainId]?.find(
                            ({ symbol }: any) => symbol === formik.values.token
                          )?.address
                        }
                        decimal={getTokenDecimals(data, chainId, formik)}
                      />
                      <button className="max-btn" type="button">
                        Max
                      </button>
                    </div>
                    {data.initialData.rateMode && (
                      <RateModeStyled>
                        <Switch
                          autoFocus={true}
                          checkedChildren="Variable"
                          onChange={(value) =>
                            formik.setFieldValue('rateMode', BigNumber.from(+value + 1))
                          }
                          defaultChecked
                          unCheckedChildren="Stable"
                        />
                      </RateModeStyled>
                    )}
                  </Col>
                </Row>
                {!data.initialData.rateMode && !data.initialData.modes && (
                  <div className="output-section mt-3">
                    <Row className="align-items-center">
                      <Col md={4}>
                        <p className="input">Output</p>
                        <div className="d-flex align-items-center">
                          <h6>
                            <span className="me-2">
                              <Icon
                                icon={
                                  data?.function_configs?.tokens[chainId]?.find(
                                    (tokenData: any) => tokenData.symbol === formik.values.token
                                  ).icon
                                }
                                width="24"
                                height="24"
                                color="white"
                              />
                            </span>
                            {getATokenSymbol(data, chainId, formik)}
                          </h6>
                        </div>
                      </Col>
                      <Col md={8}>
                        <div className="d-flex justify-content-end mt-4">
                          <h6>{formik.values.amount}</h6>
                        </div>
                      </Col>
                    </Row>
                  </div>
                )}

                <div className="bottom-section mt-2">
                  {data?.attributes?.map(({ name, value }: any, index: number) => (
                    <div key={index} className="d-flex justify-content-between align-items-center">
                      <p className="fs-6 mb-0 mt-">{name}</p>
                      <p className="fs-6 mb-0 mt-1">
                        {loading ? <Spin indicator={antIcon} /> : error ? 'N/A' : value + '%'}{' '}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <button
            type="submit"
            className="set-btn w-100 mt-3 rounded py-2 fs-5 fw-bold text-light border-0">
            Set
          </button>
        </AddProtocolStyled>
      </Form>
      <div className="icon-container">
        <div
          className={`bottom-icon ${
            exchangeItems.length || savedProtocols.length ? 'd-flex' : 'd-none'
          }`}>
          <div className="me-3">
            <CustomButton
              bgcolor={primaryColor}
              color="white"
              padding="8px 8px"
              width="60px"
              height="60px"
              type="submit"
              title="Approve"
              fontSize="12px"
              borderRadius="50%"
              // disabled={+isAllowance! > 0 && true}
              clicked={approveHandler}
            />
          </div>
          <div className="ms-3">
            <CustomButton
              bgcolor={primaryColor}
              color="white"
              padding="8px 8px"
              width="60px"
              height="60px"
              type="submit"
              title="Execute"
              fontSize="12px"
              borderRadius="50%"
              clicked={executionHandler}
            />
          </div>
        </div>
      </div>
    </FormikProvider>
  );
};

export default AaveBox;

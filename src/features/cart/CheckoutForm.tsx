import { Box } from "@mui/material";
import ContactInformationForm from "./ContactInformationForm";
import ShippingAddressForm from "./ShippingAddressForm";
import { theme } from "../../styles/theme";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ApiOrders } from "../../Types/ApiTypes";
import { useAuth } from "../../context/AuthContext";
import { shippingPrice } from "../../utils/constants";
import useOrders from "../../hooks/ordersHooks/useOrders";
import { setCurrentCartPage } from "../../store/CartSlice";
import { useNavigate } from "react-router-dom";

export type CheckoutFormInputsType = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  governorate: string;
  city: string;
};

function CheckoutForm() {
  const cartList = useSelector((state: RootState) => state.Cart.cartList);
  const paymentMethodstate = useSelector(
    (state: RootState) => state.Cart.paymentMethod
  );

  const { userData } = useAuth();
  const { addOrder } = useOrders();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartTotalPrice =
    cartList.reduce((total, item) => total + item.subTotal, 0) + shippingPrice;

  const initialValues: CheckoutFormInputsType = {
    firstName: userData?.firstName || "",
    lastName: userData?.lastName || "",
    phoneNumber: "",
    email: userData?.email || "",
    governorate: "",
    city: "",
    address: "",
  };

  const {
    register,
    handleSubmit,
    getValues,
    clearErrors,
    formState: { errors },
  } = useForm<CheckoutFormInputsType>({
    defaultValues: initialValues,
  });

  function onSubmit(CheckoutFormData: CheckoutFormInputsType) {
    const orderData: Omit<ApiOrders, "userId" | "id" | "createdAt"> = {
      status: "pending",
      totalPrice: cartTotalPrice,
      paymentMethod: paymentMethodstate,
      orderItems: cartList,
      userDetails: CheckoutFormData,
    };

    addOrder(orderData);
    navigate("/cart/order-complete");
    dispatch(setCurrentCartPage(2));
  }

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      component={"form"}
      id="checkout-form"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        "& label": {
          color: theme.palette.grey[300],
          fontWeight: "500",
        },
      }}
    >
      <ContactInformationForm register={register} errors={errors} />
      <ShippingAddressForm
        register={register}
        errors={errors}
        getValues={getValues}
        clearErrors={clearErrors}
      />
    </Box>
  );
}

export default CheckoutForm;

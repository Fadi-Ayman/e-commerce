import { Box } from "@mui/material";
import ContactInformationForm from "./ContactInformationForm";
import ShippingAddressForm from "./ShippingAddressForm";
import { theme } from "../../styles/theme";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentCartPage } from "../../store/CartSlice";
import { RootState } from "../../store/store";
import { ApiOrders } from "../../Types/ApiTypes";

export type CheckoutFormInputsType = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  governorate: string;
  city: string;
};

const initialValues: CheckoutFormInputsType = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  governorate: "",
  city: "",
  address: "",
};

function CheckoutForm() {
  const cartList = useSelector((state: RootState) => state.Cart.cartList);
  const paymentMethodstate = useSelector((state: RootState) => state.Cart.paymentMethod);
  const cartTotalPrice = cartList.reduce(
    (total, item) => total + item.subTotal ,0
  )


  const {
    register,
    handleSubmit,
    getValues,
    clearErrors,
    formState: { errors },
  } = useForm<CheckoutFormInputsType>({
    defaultValues: initialValues,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch()



  function onSubmit(FormData: CheckoutFormInputsType) {

    const orderData: Omit<ApiOrders, "id"| "createdAt"> = {
      status: "pending",
      totalPrice: cartTotalPrice,
      paymentMethod: paymentMethodstate,
      userCart: cartList,
      user: {...FormData , id:"321" }
    }
    
    // Send Order Request includes ( cartListData , userDetails from form )
    console.log(orderData)
    navigate("/cart/order-complete");
    dispatch(setCurrentCartPage(2))
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

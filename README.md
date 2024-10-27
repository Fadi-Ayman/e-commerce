<!-- To Check old password  -->

we make user to sign in again , and if token returned then the old password is true

<!-- Make WishList For Every New User, as when he signUp , we make a new Request for making him table using other request -->

<!-- handling Error in dev -->

catch (error) {
if (axios.isAxiosError(error)) {
console.error('Axios error:', error.message);
if (error.response) {
console.error('Response error message:', error.response.data.msg);
}
} else {
console.error('Unexpected error:', error);
}
}

<!-- use User Data (Login and register done ) but will use userData  -->

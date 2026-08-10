function ValidateStatusCode(status)
{
    if (status >= 200 && status < 300) {
        console.log("Success");
    }
}
const validateStatusCode_exp= function(status) {
    if (status >= 200 && status < 300) {
        console.log("Success");
    }   
    }
    const validateStatusCode_arrow = (status) => {
        if (status >= 200 && status < 300) {
            console.log("Success");
        }
    };
    ValidateStatusCode(200); // Output: Success
    validateStatusCode_exp(200); // Output: Success
    validateStatusCode_arrow(200); // Output: Success
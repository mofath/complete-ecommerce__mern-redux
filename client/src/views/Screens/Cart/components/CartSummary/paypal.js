import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';


// https://developer.paypal.com/developer/accounts/
// create acount and signup
// create test id for paypal one for buyer and one for merchant
// inside "My Apps and credentials", created app called "shopping-app" with business account
// put app id into sandbox property inside sandbox object
// make payment with any personal account
// sb-c50a11303007@personal.example.com

export default class Paypal extends React.Component {
    render() {
        const onSuccess = (payment) => {
            // the payment object has all the information about this successful payment
            this.props.onSuccess(payment)
            console.log("The payment was succeeded!", payment);
        }

        const onCancel = (data) => {
            // the data object has all the information about this canceled payment
            console.log('The payment was cancelled!', data);
        }

        const onError = (err) => {
            console.log(this.props.toPay);
            console.log("Error!", err);
        }

        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        let total = this.props.toPay; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

        const client = {
            sandbox: 'AZuzKExX3VywQxBSNIQYYR7fWB-KGV7gOwEJUAz_tc2WBQCRqZe5tRuHxRg6BAfEvmH4_OS37c9Bz2Dl',
            production: 'YOUR-PRODUCTION-APP-ID',
        }

        return (
            <PaypalExpressBtn
                env={env}
                client={client}
                currency={currency}
                total={total}
                onError={onError}
                onSuccess={onSuccess}
                onCancel={onCancel}
                style={{
                    size: 'responsive',
                    color: 'blue',
                    label: 'checkout',
                    shape: 'rect',
                }}
            />
        );
    }
}
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51HyhddDm3PWQOdVMksrqf1ERNDtmZBBBtlwn3cUhrsWRk5wub2LUf6HCyNT5DLpja5CwhyQpl1lW4I3H3RVKamMw007JmrPLqO";
    
    const onToken=token => {
        console.log(token);
        alert('Payment Successful');
    }
    
    return(
        <StripeCheckout
            label='Pay Now'
            name='Banerjee Textiles Ltd.'
            billingAddress
            shippingAddress
            description={`Your total is Rs.${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            currency='INR'
        />
    );
};

export default StripeCheckoutButton;
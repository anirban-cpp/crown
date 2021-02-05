import React from 'react';

import { SpinerContainer, SpinnerOverlay } from './with-spinner.styles';

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerOverlay />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent { ...otherProps }/>
        );
    };
    return Spinner;
}

export default WithSpinner;
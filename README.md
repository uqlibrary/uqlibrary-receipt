# uqlibrary-receipt
[ ![Codeship Status for uqlibrary/uqlibrary-receipt](https://codeship.com/projects/2c7c8020-e4c4-0133-d510-569c79a00c74/status?branch=master)](https://codeship.com/projects/146461)

A simple element that takes pulls apart the query string and shows a Payment Receipt page based on those values. See 
[the full documentation](https://uqlibrary.github.io/uqlibrary-receipt).

## Query string variables
|Variable|Description|
|--------|-----------|
|Success|Either '1' or '0'. Determines whether the payment was successful|
|AmountPaid|The value that was paid in cents|
|Receipt|The receipt number of the transaction|
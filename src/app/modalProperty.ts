export class Ptype {
    name: string;
    value: number;
}
export const monthList: Ptype[] = [
{value: 1, name: '01 Jan'},
{value: 2, name: '02 Feb'},
{value: 3, name: '03 Mar'},
{value: 4, name: '04 Apr'},
{value: 5, name: '05 May'},
{value: 6, name: '06 Jun'},
{value: 7, name: '07 Jul'},
{value: 8, name: '08 Aug'},
{value: 9, name: '09 Sep'},
{value: 10, name: '10 Oct'},
{value: 11, name: '11 Nov'},
{value: 12, name: '12 Dec'}];
export const yearList: Ptype[] = [
    {value: 2020, name: '2020'},
    {value: 2021, name: '2021'},
    {value: 2022, name: '2022'},
    {value: 2023, name: '2023'},
    {value: 2024, name: '2024'},
    {value: 2025, name: '2025'},
    {value: 2026, name: '2026'},
    {value: 2027, name: '2027'},
    {value: 2028, name: '2028'},
    {value: 2029, name: '2029'},
    {value: 2030, name: '2030'}];
    export class FormControles {
        field: string;
        errorMessage: string;
    }
    export const validationApplicationForm: FormControles[] = [
        { field: 'fullName', errorMessage: 'Please enter your Full Name' },
        { field: 'email', errorMessage: 'Please enter your email' },
        { field: 'password', errorMessage: 'Please enter your password' },
        { field: 'date', errorMessage: 'Please enter your date' },
        { field: 'month', errorMessage: 'Please enter your month' },
        { field: 'year', errorMessage: 'Please enter your year' },
        { field: 'gender', errorMessage: 'Please select your gender' },
        { field: 'paymentType', errorMessage: 'Please enter your Payment Details' },
        { field: 'cardNumber', errorMessage: 'Please enter your card number' },
        { field: 'cardCVC', errorMessage: 'Please enter your card CVC' },
        { field: 'monthSelected', errorMessage: 'Please enter your expiry month' },
        { field: 'yearSelected', errorMessage: 'Please enter your expiry year' },
        { field: 'termsConditions', errorMessage: 'Please select terms and Conditions' }
    ];

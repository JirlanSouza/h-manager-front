export interface CustomerData {
    name: string;
    cpf: string;
    email: string;
    telephone: number;
    address: CustomerAddressData;
}

export interface CustomerAddressData {
    street: string;
    houseNumber: string;
    neighborhood: string;
    zipCode: string;
    city: string;
    state: string;
    country: string;
}

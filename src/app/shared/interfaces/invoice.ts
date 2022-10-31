export interface Invoice {
    id?: string,
    number?: number,
    status?: string,
    customer?: string,
    createdDate?: string,
    amount?: string,
    sendDate?: string,
}

export interface Position {
    id?: string,
    position?: number,
    name?: string,
    amount?: number,
    unit?: string,
    price?: number,
    discount?: number,
    discountUnit?: string,
}

export interface Article {
    id?: string,
    name?: string,
    price?: string,
    unit?: string,
    type?: string,
}

interface IndData {
    active: string;
    confirmed: string;
    deaths: string;
    deltaconfirmed: string;
    deltadeaths: string;
    deltarecovered: string;
    lastupdatedtime: Date;
    recovered: string;
    state: string;
    statecode: string;
    district? : string[];
}

export interface CovidIndType {
    key_values: string;
    total_values: IndData,
    state_wise: {
        Maharashtra: IndData;
        'Tamil Nadu': IndData;
        Delhi: IndData;
        Rajasthan: IndData;
        Telangana: IndData;
        'Madhya Pradesh': IndData;
        'Uttar Pradesh': IndData;
        Gujarat: IndData;
        'Andhra Pradesh': IndData;
        Kerala: IndData;
        Karnataka: IndData;
        'Jammu and Kashmir': IndData;
        Haryana: IndData;
        Punjab: IndData;
        'West Bengal': IndData;
        Bihar: IndData;
        Odisha: IndData;
        Uttarakhand: IndData;
        'Himachal Pradesh': IndData;
        Assam: IndData;
        Chandigarh: IndData;
        Chhattisgarh: IndData;
        Jharkhand: IndData;
        Ladakh: IndData;
        'Andaman and Nicobar Islands': IndData;
        Goa: IndData;
        Puducherry: IndData;
        Tripura: IndData;
        Manipur: IndData;
        Mizoram: IndData;
        'Dadra and Nagar Haveli': IndData;
        'Arunachal Pradesh': IndData;
        'Daman and Diu': IndData;
        Lakshadweep: IndData;
        Meghalaya: IndData;
        Nagaland: IndData;
        Sikkim: IndData;
    }
}

    export class Geo {
        lat: string;
        lng: string;
    }

    export class Address {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: Geo;
    }

    export class Company {
        name: string;
        catchPhrase: string;
        bs: string;
    }

    export class Usuario {
        id: number;
        name: string;
        username: string;
        email: string;
        address: Address;
        phone: string;
        website: string;
        company: Company;
    }

    export class Todo {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }


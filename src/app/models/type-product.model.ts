export interface Product {
  readonly id: number;
  readonly name: string;
  readonly first_name: string;
  readonly email: string;
  readonly centre: boolean;
  readonly organisme: boolean;
  readonly perenne: boolean;
  readonly occasionnel: boolean;
  readonly active: boolean;
}

export interface CreateProductDTO {
  readonly name: string;
  readonly first_name: string;
  readonly email: string;
  readonly centre: boolean;
  readonly organisme: boolean;
  readonly perenne: boolean;
  readonly occasionnel: boolean;
}

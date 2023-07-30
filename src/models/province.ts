import { Serializable } from './serializable';

export class Province implements Serializable<Province> {
  id: number;
  countryId: number;
  name: string;
  deserialize(input: any): Province {
    this.id = input.id;
    this.countryId = input.countryId;
    this.name = input.name;
    return this;
  }
}

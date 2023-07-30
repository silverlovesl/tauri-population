import { flagCN, flagJP, flagUS } from '@/assets/flags';
import { Serializable } from './serializable';

export const orgFlagMap: Record<string, string> = {
  cn: flagCN,
  jp: flagJP,
  us: flagUS,
};

export class Organization implements Serializable<Organization> {
  id: number;
  name: string;
  enName: string;
  languageCode: string;
  countryCode: string;
  flag: string;
  deserialize(input: any): Organization {
    this.id = input.id;
    this.name = input.name;
    this.enName = input.enName;
    this.countryCode = input.countryCode;
    this.languageCode = input.languageCode;
    this.flag = orgFlagMap[this.countryCode];
    return this;
  }
}

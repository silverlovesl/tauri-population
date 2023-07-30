import { Organization, Province } from '@/models';
import { invoke } from '@tauri-apps/api';
import { useEffect, useState } from 'react';

/**
 * Get orginazation list
 * @returns
 */
export const useOrganizationAPI = () => {
  const [orginazations, setOrginazations] = useState<Organization[]>([]);
  useEffect(() => {
    (async () => {
      const jsonStr = await invoke('fetch_countries');
      const countriesJSON = JSON.parse((jsonStr || '[]') as string) as [];
      const list = countriesJSON.map((input) => new Organization().deserialize(input));
      setOrginazations(list);
    })();
  }, []);

  return { orginazations };
};

export const useProvinceAPI = (countryId: number) => {
  const [provinces, setProvinces] = useState<Province[]>([]);
  useEffect(() => {
    if (countryId > 0) {
      (async () => {
        try {
          const jsonStr = await invoke('fetch_provinces', { countryId });
          const provincesJSON = JSON.parse((jsonStr || '[]') as string) as [];
          const list = provincesJSON.map((input) => new Province().deserialize(input));
          setProvinces(list);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [countryId]);

  return { provinces };
};

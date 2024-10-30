
import React from 'react';
import { useProvinces } from '../hooks/useProvinces';
import { Province } from '../services/provinceService';

const ProvinceList: React.FC = () => {
  const { data, error, isLoading  } = useProvinces();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  
  if (!Array.isArray(data)) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h1>Danh sách tỉnh thành</h1>
      <ul>
        {data && data.map((province: Province) => (
          <li key={province.code}>
            Mã tỉnh thành: {province.phone_code} - Tên tỉnh thành: {province.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProvinceList;

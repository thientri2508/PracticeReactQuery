import axios from 'axios';
const API_URL = 'https://provinces.open-api.vn/api/';

// Định nghĩa kiểu Province
export interface Province {
    name: string;
    code: number;
    division_type: string;
    codename: string;
    phone_code: number;
    districts: [string];
  }

export const fetchProvinces = async () => {
  try {
    const response = await axios.get<Province[]>(API_URL);    
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to fetch provinces');
    } else {
      throw new Error('Failed to fetch provinces');
    }
  }
};


export const fetchProvincesByName = async (name: string)=> {
  try {
    const response = await axios.get<Province[]>(`https://provinces.open-api.vn/api/d/search/`, { params: { q: name } });
    // Kiểm tra dữ liệu trước khi trả về
    if (!Array.isArray(response.data)) {
      throw new Error('Invalid data format');
    }
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || 'Failed to fetch provinces');
    } else {
      throw new Error('Failed to fetch provinces');
    }
  }
};


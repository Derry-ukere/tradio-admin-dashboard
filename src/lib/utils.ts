export const getData = () =>{
  const data = localStorage.getItem('adminInfo');
  return JSON.parse(data || '{}' );
};

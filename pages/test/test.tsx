import { useState, useEffect } from 'react';
import { get } from '../../utils/request';

const TestComponent = () => {
  const [testData, setTestData]:any = useState(null);

  useEffect(() => {
    // 在组件挂载时发送请求
    get('/test')
      .then(response => {
        setTestData(response.data);
      })
      .catch(error => {
        console.error('Error fetching test data:', error);
      });
  }, []);

  return (
    <div>
      {testData ? (
        <div>
          <h2>Test Data:</h2>
          <p>Name: {testData.name}</p>
          <p>Age: {testData.age}</p>
          <p>Sex: {testData.sex}</p>
        </div>
      ) : (
        <p>Loading test data...</p>
      )}
    </div>
  );
};

export default TestComponent;
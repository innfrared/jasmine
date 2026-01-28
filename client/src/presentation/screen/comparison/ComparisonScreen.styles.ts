import styled from 'styled-components';

export const ComparisonPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const ComparisonText = styled.div`
  font-weight: bold;
  font-size: 2rem;
  color: #cc0c5c;
`;

export const ComparisonTable = styled.div`
  display: flex;
  overflow-x: auto;
  align-items: flex-end;
  padding: 30px;
  width: 90vw;
`;

export const TableLeft = styled.div`
  min-width: 250px;
  background-color: #cc0c5c;
  padding: 20px;
  border-radius: 15px;
  text-align: left;
  height: fit-content;
  position: relative;
  margin-bottom: 60px;
`;

export const FeatureRow = styled.div`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 0.9rem;
  padding: 10px;
  border-bottom: 2px solid #ffffff;

  &:last-child {
    border-bottom: none;
  }
`;

export const TableRight = styled.div`
  display: flex;
`;

export const ProductColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-width: 150px;
  width: 350px;
  text-align: center;
  padding: 0 20px;
`;

export const ProductHeader = styled.div`
  font-size: 0.9rem;
  margin-bottom: 10px;
  cursor: pointer;

  > div {
    font-weight: bold;
    font-size: 1.6rem;
    margin-bottom: 20px;
  }

  > img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    box-shadow:
      rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border-radius: 20px;
    margin-bottom: 20px;
  }
`;

export const FeatureCellTableBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const FeatureCellTable = styled.div`
  background-color: #efefef;
  padding: 20px;
  width: 80%;
`;

export const FeatureCell = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-size: 0.9rem;
  border-bottom: 2px solid #b6b6b6;

  &:last-child {
    border-bottom: none;
  }
`;

export const RemoveButton = styled.button`
  background: #d3d3d3;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #7c7c7c;
  border-radius: 50px;
  transition: color 0.2s ease;
  width: 50px;
  height: 50px;

  &:hover {
    color: #dc1515;
    background-color: #efcaca;
  }
`;

export const DividerLine = styled.div`
  width: 90%;
  background-color: #dcdcdc;
  height: 2px;
  margin: 0 16px;
`;

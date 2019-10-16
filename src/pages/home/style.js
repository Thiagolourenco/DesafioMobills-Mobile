import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #3867d6;
  align-items: center;
`;

export const List = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  height: 75px;
  width: 350px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  margin-top: 25px;
  flex-direction: row;
`;

export const ListName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
  padding-left: 12px;
  padding-top: 15px;
`;

export const DateOfBirth = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
  padding-left: 12px;
`;

export const ButtonAdd = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: #354fab;
  height: 77px;
  width: 77px;
  border-radius: 38.5;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Footer = styled.View`
  margin-top: 20%;
  /* flex: 1; */
  width: 100%;
  height: 100px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 180px;
  border-top-right-radius: 180px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  align-self: flex-start;
  margin-top: 10px;
  margin-left: 10px;
`;

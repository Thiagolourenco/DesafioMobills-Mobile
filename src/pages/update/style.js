import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #3867d6;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  margin-left: 110px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const ButtonBack = styled.TouchableOpacity`
  justify-content: center;
  margin-left: 20;
`;

export const Header = styled.View`
  flex-direction: row;
  align-self: stretch;
`;

export const TextIn = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  height: 51px;
  width: 380px;
  background-color: rgba(255, 255, 255, 0.85);
  color: #000;
  padding: 8px;
  border-radius: 15px;
  font-size: 18px;
  margin-bottom: 15px;
`;

export const GpButton = styled.View`
  flex-direction: row;
  margin-top: 30px;
`;
export const ButtonUpdate = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  height: 50px;
  width: 157px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: rgba(53, 70, 171, 0.94);
`;

export const ButtonRemove = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  height: 50px;
  width: 157px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: rgba(192, 69, 69, 0.94);
  margin-left: 10px;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const InputDate = styled.TouchableOpacity`
  height: 51px;
  width: 380px;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 15px;
  margin-bottom: 15px;
`;

export const InputOp = styled.Picker`
  height: 51px;
  width: 380px;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 15px;
  margin-bottom: 15px;
`;

export const InputDateText = styled.Text`
  color: #000;
  font-size: 18px;
  padding: 8px;
`;

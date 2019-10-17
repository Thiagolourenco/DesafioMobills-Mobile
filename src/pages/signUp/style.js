import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: #3867d6;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 20px;
  padding: 0 25px;
`;

export const Input = styled.TextInput`
  height: 54px;
  background-color: rgba(255, 255, 255, 0.85);
  color: #000;
  padding: 8px;
  border-radius: 15px;
  font-size: 18px;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 36px;
  font-weight: bold;
`;

export const ButtonCadastro = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: rgba(53, 70, 171, 0.94);
  height: 54px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const CadastrarText = styled.Text`
  color: rgba(119, 123, 126, 0.9);
  font-size: 13px;
  font-weight: bold;
  margin-top: 120px;
`;

export const Success = styled.Text`
  color: rgba(53, 175, 109, 0.94);
  font-size: 14px;
  margin-top: 10px;
  text-align: center;
`;

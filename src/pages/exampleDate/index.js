import React, {useState} from 'react';
import {Text, DatePickerAndroid} from 'react-native';
import DateInput from '../../components/DateInput';

import {Container, Content, InputDate, InputDateText} from './style';
import {format} from 'date-fns';
import pt from 'date-fns/locale/pt';

function ExampleDate() {
  const [date, setDate] = useState(new Date());
  const [dataDia, setDataDia] = useState('');

  // async function handleDate() {
  //   try {
  //     const {action, year, month, day} = await DatePickerAndroid.open({
  //       mode: 'spinner',
  //     });

  //     if (action !== DatePickerAndroid.dismissedAction) {
  //       let dado = new Date(year, month, day);
  //       let newDate = {};

  //       newDate['dado'] = dado;
  //       newDate['dataDia'] = dado.toLocaleDateString('en-US');
  //       setDado(newDate);
  //     }
  //   } catch (error) {
  //     alert(error.code);
  //   }
  // }
  return (
    <Container>
      <Content>
        <Text>
          {JSON.stringify(format(date, "dd 'de' MMMM 'de' yyyy", {locale: pt}))}
        </Text>
        <DateInput date={date} onChange={setDate} />
      </Content>
    </Container>
  );
}

export default ExampleDate;

// try {
//   const {action, year, month, day} = await DatePickerAndroid.open({
//     mode: 'spinner',
//   });

//   if (action !== DatePickerAndroid.dismissedAction) {
//     let date = new Date(year, month, day);
//     let newDate = {};

//     newDate['date'] = date;
//     newDate['diaCompra'] = date.toLocaleDateString('en-US');
//     this.setState(newDate);
//   }
// } catch ({code, message}) {
//   alert(code, message);
// }

import React, {useMemo} from 'react';
import {DatePickerAndroid} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import {format} from 'date-fns';
import pt from 'date-fns/locale/pt';

import {Container, DateButton, DateText} from './style';

export default function DateInput({date, onChange}) {
  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", {locale: pt}),
    [date],
  );

  async function handleOpenPicker() {
    const {action, year, month, day} = await DatePickerAndroid.open({
      mode: 'spinner',
      date,
    });

    if (action === DatePickerAndroid.dateSetAction) {
      const selectedDate = new Date(year, month, day);

      onChange(selectedDate);
    }
  }
  return (
    <Container>
      <DateButton onPress={handleOpenPicker}>
        <DateText>{dateFormatted}</DateText>
      </DateButton>
    </Container>
  );
}

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

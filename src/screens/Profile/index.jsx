import { View } from 'react-native';

import Title from '../../components/Title';

import styles from './styles';

export default function Profile({ route }) {
    const { person } = route.params
    // console.log(person)

  return (
    <View style={styles.container}>
        <Title title={`Perfil de : ${person.name}`} />
    </View>
  )
}
// import necessary modules
import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

// import necessary data
import cumpri from '../../data/cumpri'

// import necessary components
import Title from '../../components/Title'
import NavigateButton from '../../components/NavigateButton'

// import necessary styles
import styles from './styles'

// Home component
export default function Home() {
  return (
    <View style={styles.container}>
        <Title title="Home" />
        <Text>Olá, seja bem-vindo!</Text>
        <NavigateButton navigateDest="Profile" text="Perfil" params={cumpri} />
    </View>
  )
}
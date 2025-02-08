import { StyleSheet } from "react-native";

export interface ThemeColors {
  primary: string;
  text: string;
  background: string;
  cardBackground: string;
  buttonTextColor: string;
}

export const luxeLight: ThemeColors = {
  primary: "#8A6BBE",  // Púrpura suave
  text: "#2C2C2C",  // Gris oscuro para mejor lectura
  background: "#F8F5F2",  // Beige elegante
  cardBackground: "#FFFFFF",  // Blanco puro
  buttonTextColor: "#FFFFFF",  // Blanco
};

export const noirDark: ThemeColors = {
  primary: "#A27DE1",  // Lila refinado
  text: "#EDEDED",  // Gris claro para mejor contraste
  background: "#141414",  // Negro profundo
  cardBackground: "#1E1E1E",  // Gris oscuro
  buttonTextColor: "#FFFFFF",  // Blanco
};

export const royalBlue: ThemeColors = {
  primary: "#34568B",  // Azul sofisticado
  text: "#E5E5E5",  // Blanco ahumado
  background: "#0D1B2A",  // Azul noche
  cardBackground: "#1B263B",  // Azul profundo
  buttonTextColor: "#F8F5F2",  // Beige claro
};

export const crimsonVelvet: ThemeColors = {
  primary: "#D72638",  // Rojo intenso
  text: "#2C2C2C",  // Gris oscuro
  background: "#F8EDEB",  // Rosa palo
  cardBackground: "#FFFFFF",  // Blanco puro
  buttonTextColor: "#F8EDEB",  // Rosa claro
};

export const themes: Record<string, ThemeColors> = {
  luxe: luxeLight,
  noir: noirDark,
  royal: royalBlue,
  crimson: crimsonVelvet,
};

export const globalStyles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    // color: colors.text,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    // color: colors.text,
  },

  mainContainer: {
    flex: 1,
    // backgroundColor: colors.background,
  },
  globalMargin: {
    paddingHorizontal: 10,
    flex: 1,
  },

  btnPrimary: {
    // backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 8,
    alignItems: "center",
  },
  btnPrimaryText: {
    // color: colors.text,
    fontSize: 16,
  },
  input:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'rgba(0,0,0,0.3)',
    borderRadius: 10,
  }
});
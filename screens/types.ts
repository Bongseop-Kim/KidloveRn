import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/core';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AxiosError} from 'axios';

/* MainTab */
export type MainTabParamList = {
  Home: undefined;
  Search: undefined;
  UserMenu: undefined;
  // 지워야 함
};
export type MainTabNavigationScreenParams =
  NavigatorScreenParams<MainTabParamList>;

export type MainTabNavigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  BottomTabNavigationProp<MainTabParamList>
>;
export type MainTabRouteProp = RouteProp<RootStackParamList, 'MainTab'>;

/* RootStack */
export type RootStackParamList = {
  MainTab: MainTabNavigationScreenParams;
  Hospital: {
    id: string;
  };
  Register: undefined;
  Login: undefined;
  Write: undefined;
};
export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export interface IconType {
  color: string;
  size: number;
}

// api

export interface User {
  id: number;
  name: string;
  email: string;
  emailVerified: string;
  password: string;
  phoneNumber: string;
  role: string;
  userLat: number;
  userLon: number;
  createdAt: string;
  updatedAt: string;
  hospitalId: string;
  adminVerified: boolean;
  address: string;
}

export interface Hospital {
  id: string;
  dutyAddr: string;
  dutyAddr1Depth: string;
  dutyAddr2Depth: string;
  dutyAddr3Depth: string;
  dutyEtc: string;
  dutyName: string;
  dutyTel1: string;
  startLunch: string;
  endLunch: string;
  dutyTime1s: string;
  dutyTime1c: string;
  dutyTime2s: string;
  dutyTime2c: string;
  dutyTime3s: string;
  dutyTime3c: string;
  dutyTime4s: string;
  dutyTime4c: string;
  dutyTime5s: string;
  dutyTime5c: string;
  dutyTime6s: string;
  dutyTime6c: string;
  dutyTime7s: string;
  dutyTime7c: string;
  dutyTime8s: string;
  dutyTime8c: string;
  dutyTime9s: string;
  dutyTime9c: string;
  notice: string;
  wgs84Lat: number;
  wgs84Lon: number;
}

export interface Auth {
  token: number;
  role: string;
  hospitalId: string;
  adminVerified: boolean;
}

export interface User {
  id: number;
  name: string;
  email: string;
  emailVerified: string;
  password: string;
  phoneNumber: string;
  role: string;
  userLat: number;
  userLon: number;
  createdAt: string;
  updatedAt: string;
  hospitalId: string;
  adminVerified: boolean;
  address: string;
}

export interface AuthResult {
  adminVerified: boolean;
  hospitalId: string;
  role: string;
  token: string;
}

type AuthErrorData = {
  messages: {
    id: string;
    message: string;
  }[];
}[];
type CustomErrorData = {
  error: string;
  message: string;
  statusCode: number;
};

export type AuthError = AxiosError<{
  statusCode: number;
  error: CustomErrorData;
  message: AuthErrorData;
  data: AuthErrorData;
}>;

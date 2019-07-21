import styled from 'styled-components/native';
import { WebView as WV } from 'react-native-webview';

export const WebView = styled(WV)`
  flex: 1;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: '#7159c1',
  size: 'large',
})``;

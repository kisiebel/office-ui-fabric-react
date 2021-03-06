import { getTheme } from 'office-ui-fabric-react/lib/Styling';
import { IStyleFunction } from 'office-ui-fabric-react/lib/Utilities';
import { IPropertiesTableSetStyleProps, IPropertiesTableSetStyles } from './PropertiesTableSet.types';

export const getStyles: IStyleFunction<IPropertiesTableSetStyleProps, IPropertiesTableSetStyles> = props => {
  const { theme = getTheme() } = props;
  return {
    tableRoot: [
      {
        marginBottom: 20,
        overflowX: 'auto',
        overflowY: 'inherit'
      },
      'PropertiesTable'
    ],
    tableHeader: theme.fonts.mediumPlus
  };
};

import _ from 'lodash';
import { formPlayerProfileData } from 'helpers/addPlayerProfileData';

const memoizedFormPlayerProfileData = _.memoize(formPlayerProfileData);

export { memoizedFormPlayerProfileData };

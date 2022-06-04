/**
 * @file
 * @author Albert Patterson <albert.patterson.code@gmail.com>
 * @see [Linkedin]{@link https://www.linkedin.com/in/apattersoncmu/}
 * @see [Github]{@link https://github.com/albertpatterson}
 * @see [npm]{@link https://www.npmjs.com/~apatterson189}
 * @see [Youtube]{@link https://www.youtube.com/channel/UCrECEffgWKBMCvn5tar9bYw}
 * @see [Medium]{@link https://medium.com/@albert.patterson.code}
 *
 * Free software under the GPLv3 licence. Permissions of this strong copyleft
 * license are conditioned on making available complete source code of
 * licensed works and modifications, which include larger works using a
 * licensed work, under the same license. Copyright and license notices must
 * be preserved. Contributors provide an express grant of patent rights.
 */

import { __dirname } from './constants.js';
import path from 'path';
import { getConfig as getPageConfig } from './get.webpack.config.page.js';

export async function getConfig(isProd) {
  const inputPath = path.resolve(__dirname, '..', '..', 'src', 'popup');
  const outputPath = path.resolve(
    __dirname,
    '..',
    '..',
    'dist',
    'unpacked',
    'popup'
  );

  return await getPageConfig(isProd, inputPath, outputPath);
}

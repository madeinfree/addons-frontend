import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import * as React from 'react';
import { compose } from 'redux';

import Card from 'ui/components/Card';
import translate from 'core/i18n/translate';
import { sanitizeHTML } from 'core/utils';

import 'amo/components/StaticPages/StaticPages.scss';


export class AboutBase extends React.Component {
  static propTypes = {
    i18n: PropTypes.object.isRequired,
  }

  render() {
    const { i18n } = this.props;

    return (
      <Card
        className="StaticPage"
        header={i18n.gettext('About Firefox Add-ons')}
      >
        <Helmet>
          <title>{i18n.gettext('About Firefox Add-ons')}</title>
        </Helmet>

        <div className="StaticPageWrapper">
          <div id="about">
            <p>
              {i18n.gettext(`Addons.mozilla.org (AMO), is Mozilla's official site
                for discovering and installing add-ons for the Firefox browser.
                Add-ons help you modify and personalize your browsing experience
                by adding new features to Firefox, enhancing your interactions
                with Web content, and changing the way your browser looks.`)}
            </p>
            <p
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={
                sanitizeHTML(
                  i18n.sprintf(
                    i18n.gettext(`You can also use AMO to find add-ons for Mozilla
                      %(startTBLink)sThunderbird%(endTBLink)s and
                      %(startSMLink)sSeaMonkey%(endSMLink)s.`),
                    { startTBLink: '<a href="https://addons.mozilla.org/thunderbird/">',
                      endTBLink: '</a>',
                      startSMLink: '<a href="https://addons.mozilla.org/seamonkey/">',
                      endSMLink: '</a>' }
                  ), ['a'])
              }
            />
          </div>
          <section>
            <h2>{i18n.gettext('A community of creators')}</h2>
            <p>
              {i18n.gettext(`The add-ons listed here are created by
                thousands of developers and theme designers from all over the
                world, ranging from individual hobbyists to large corporations.
                Some add-ons listed on AMO have been automatically published
                and may be subject to review by a team of editors once
                publically listed.`)}
            </p>
          </section>
          <section>
            <h2>{i18n.gettext(`Get involved`)}</h2>
            <p>
              {i18n.gettext(`Mozilla is a non-profit champion of the Internet, we
                build Firefox to help keep it healthy, open and accessible. Add-ons
                support user choice and customization in Firefox, and you can
                contribute in the following ways:`)}
            </p>
            <ul>
              <li
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={
                  sanitizeHTML(
                    i18n.sprintf(
                      i18n.gettext(`%(startLink)sMake your own add-on%(endLink)s.
                        We provide free hosting and update services and can help you
                        reach a large audience of users.`),
                      { startLink: '<a href="https://addons.mozilla.org/developers/">', endLink: '</a>' }
                    ), ['a'])
                }
              />
              <li
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={
                  sanitizeHTML(
                    i18n.sprintf(
                      i18n.gettext(`Help improve this website. It's open source, and you
                        can file bugs and submit patches. You can get started with a
                        %(startGoodFirstBugLink)sgood first bug%(endGoodFirstBugLink)s
                        or view all open issues for AMO’s
                        %(startAddonsServerRepoLink)sserver%(endAddonsServerRepoLink)s and
                        %(startAddonsFrontendRepoLink)sfrontend%(endAddonsFrontendRepoLink)s
                        on Github.`),
                      { startGoodFirstBugLink: '<a href="https://github.com/search?l=&q=repo:mozilla/addons+repo:mozilla/addons-frontend+repo:mozilla/addons-linter+repo:mozilla/addons-server+label:%22contrib:+good+first+bug%22&ref=advsearch&state=open&type=Issues">',
                        endGoodFirstBugLink: '</a>',
                        startAddonsServerRepoLink: '<a href="https://github.com/mozilla/addons-server/issues">',
                        endAddonsServerRepoLink: '</a>',
                        startAddonsFrontendRepoLink: '<a href="https://github.com/mozilla/addons-frontend/issues">',
                        endAddonsFrontendRepoLink: '</a>' }
                    ), ['a'])
                }
              />
            </ul>
            <p>
              {i18n.gettext(`If you want to contribute but are not quite as technical, there are still ways to help:`)}
            </p>
            <ul>
              <li
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={
                  sanitizeHTML(
                    i18n.sprintf(
                      i18n.gettext(`Participate in our %(startLink)sforum%(endLink)s.`),
                      { startLink: '<a href="https://discourse.mozilla-community.org/c/add-ons">', endLink: '</a>' }
                    ), ['a'])
                }
              />
              <li>
                {i18n.gettext(`Leave feedback for your favorite add-ons. Add-on authors are more likely
                  to improve their add-ons and create new ones when they know people appreciate their
                  work.`)}
              </li>
              <li>
                {i18n.gettext(`Tell your friends and family that Firefox is a fast, secure browser
                  that protects their privacy, and they can use add-ons to make it their own!`)}
              </li>
            </ul>
            <p
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={
                sanitizeHTML(
                  i18n.sprintf(
                    i18n.gettext(`To see more ways you can contribute to the add-on community, please visit our %(startLink)swiki%(endLink)s`),
                    { startLink: '<a href="https://wiki.mozilla.org/Add-ons/Contribute">',
                      endLink: '</a>' }
                  ), ['a'])
              }
            />
          </section>
          <section>
            <h2>{i18n.gettext('Get support')}</h2>
            <p
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={
                sanitizeHTML(
                  i18n.sprintf(
                    i18n.gettext(`If you would like to learn more about how to manage add-ons in
                      Firefox, or need to find general Firefox support, please visit
                      %(startSUMOLink)sSupport%(endSUMOLink)s
                      Mozilla. If you don't find an answer there, you can
                      %(startForumLink)sask on our community forum%(endForumLink)s.`),
                    { startSUMOLink: '<a href="https://support.mozilla.org/products/firefox/manage-preferences-and-add-ons-firefox/install-and-manage-add-ons">',
                      endSUMOLink: '</a>',
                      startForumLink: '<a href="https://discourse.mozilla-community.org/c/add-ons">',
                      endForumLink: '</a>' }
                  ), ['a'])
              }
            />
            <p
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={
                sanitizeHTML(
                  i18n.sprintf(
                    i18n.gettext(`%(startLink)sInformation about how to contact Mozilla's add-ons team can be found here%(endLink)s.`),
                    { startLink: '<a href="https://wiki.mozilla.org/Add-ons#Getting_in_touch">',
                      endLink: '</a>' }
                  ), ['a'])
              }
            />
          </section>
        </div>
      </Card>
    );
  }
}

export default compose(
  translate(),
)(AboutBase);

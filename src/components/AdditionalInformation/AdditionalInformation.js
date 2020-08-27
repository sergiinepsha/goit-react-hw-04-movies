import React from "react";
import PropTypes from "prop-types";

import {
  AdditionalInfoCSS,
  TitleH2CSS,
  AdditionalInfoListCSS,
  AdditionalInfoItemCSS,
  AdditionalInfoLinkCSS,
} from "./styledAdditionalInformation";

const AdditionalInformation = ({ matchUrl, locationState }) => (
  <AdditionalInfoCSS>
    <TitleH2CSS>Additional Information</TitleH2CSS>
    <AdditionalInfoListCSS>
      <AdditionalInfoItemCSS>
        <AdditionalInfoLinkCSS
          to={{
            pathname: `${matchUrl}/cast`,
            state: locationState,
          }}
        >
          Cast
        </AdditionalInfoLinkCSS>
      </AdditionalInfoItemCSS>
      <AdditionalInfoItemCSS>
        <AdditionalInfoLinkCSS
          to={{
            pathname: `${matchUrl}/reviews`,
            state: locationState,
          }}
        >
          Reviews
        </AdditionalInfoLinkCSS>
      </AdditionalInfoItemCSS>
    </AdditionalInfoListCSS>
  </AdditionalInfoCSS>
);

AdditionalInformation.propTypes = {
  matchUrl: PropTypes.string.isRequired,
  locationState: PropTypes.object.isRequired,
};

export default AdditionalInformation;

import React from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/actions";

import ComposerNewRequest from "./NewRequest/ComposerNewRequest.jsx";

const mapStateToProps = (store) => ({
  reqResArray: store.business.reqResArray,
  composerDisplay: store.ui.composerDisplay,
  newRequestFields: store.business.newRequestFields,
  newRequestHeaders: store.business.newRequestHeaders,
  newRequestStreams: store.business.newRequestStreams,
  newRequestBody: store.business.newRequestBody,
  newRequestCookies: store.business.newRequestCookies,
  newRequestSSE: store.business.newRequestSSE,
  currentTab: store.business.currentTab,
  warningMessage: store.business.warningMessage,
  introspectionData: store.business.introspectionData,
});

const mapDispatchToProps = (dispatch) => ({
  reqResAdd: (reqRes) => {
    dispatch(actions.reqResAdd(reqRes));
  },
  setComposerWarningMessage: (message) => {
    dispatch(actions.setComposerWarningMessage(message));
  },
  setComposerDisplay: (composerDisplay) => {
    dispatch(actions.setComposerDisplay(composerDisplay));
  },
  setNewRequestHeaders: (requestHeadersObj) => {
    dispatch(actions.setNewRequestHeaders(requestHeadersObj));
  },
  setNewRequestStreams: (requestStreamsObj) => {
    dispatch(actions.setNewRequestStreams(requestStreamsObj));
  },
  setNewRequestFields: (requestFields) => {
    dispatch(actions.setNewRequestFields(requestFields));
  },
  setNewRequestBody: (requestBodyObj) => {
    dispatch(actions.setNewRequestBody(requestBodyObj));
  },
  setNewRequestCookies: (requestCookiesObj) => {
    dispatch(actions.setNewRequestCookies(requestCookiesObj));
  },
  setNewRequestSSE: (requestSSEBool) => {
    dispatch(actions.setNewRequestSSE(requestSSEBool));
  },
});

const ComposerContainer = (props) => {
  return (
    <div className="composerContents">
      <ComposerNewRequest {...props} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ComposerContainer);

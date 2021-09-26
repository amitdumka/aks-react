//Note : No Changes are required in this function.
import React, { createContext, useContext, useState, useCallback } from "react";
import { isEqual, isFunction } from "lodash";

const UIContext = createContext();

export function useUIContext() {
  return useContext(UIContext);
}
export const UIConsumer = UIContext.Consumer;

export function UIProvider({ UIEvents, children , Filter, InitDataModel}) {
  const [queryParams, setQueryParamsBase] = useState(Filter);
  const [ids, setIds] = useState([]);
  const setQueryParams = useCallback((nextQueryParams) => {
    setQueryParamsBase((prevQueryParams) => {
      if (isFunction(nextQueryParams)) {
        nextQueryParams = nextQueryParams(prevQueryParams);
      }
      if (isEqual(prevQueryParams, nextQueryParams)) {
        return prevQueryParams;
      }
      return nextQueryParams;
    });
  }, []);

  const value = {
    queryParams,
    setQueryParamsBase,
    ids,
    setIds,
    setQueryParams,
    initDataModel:InitDataModel,
    newButtonClick: UIEvents.newButtonClick,
    openEditDialog: UIEvents.openEditDialog,
    openDeleteDialog: UIEvents.openDeleteDialog,
    openDeletesDialog: UIEvents.openDeletesDialog,
    openFetchDialog: UIEvents.openFetchDialog,
    openUpdateStatusDialog: UIEvents.openUpdateStatusDialog,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

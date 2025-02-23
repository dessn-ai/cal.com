import type { TFunction } from "next-i18next";

import { WEBAPP_URL } from "@calcom/lib/constants";

import { BaseEmailHtml, CallToAction } from "../components";

export const DisabledAppEmail = (
  props: {
    appName: string;
    appType: string[];
    t: TFunction;
    title?: string;
    eventTypeId?: number;
  } & Partial<React.ComponentProps<typeof BaseEmailHtml>>
) => {
  const { title, appName, eventTypeId, t, appType } = props;

  const subject = t("app_disabled", { appName });

  return (
    <BaseEmailHtml subject={subject}>
      {appType.some((type) => type === "payment") ? (
        <>
          <p style={{ fontWeight: 400, lineHeight: "24px" }}>
            {t("disabled_app_affects_event_type", { appName, eventType: title })}
          </p>
          <p style={{ fontWeight: 400, lineHeight: "24px" }}>
            {t("payment_disabled_still_able_to_book")}
          </p>

          <hr style={{ marginBottom: "24px" }} />

          <CallToAction
            label={t("edit_event_type")}
            href={`${WEBAPP_URL}/event-types/${eventTypeId}?tabName=apps`}
          />
        </>
      ) : title && eventTypeId ? (
        <>
          <p style={{ fontWeight: 400, lineHeight: "24px" }}>
            {t("app_disabled_with_event_type", { appName, title })}
          </p>

          <hr style={{ marginBottom: "24px" }} />

          <CallToAction
            label={t("edit_event_type")}
            href={`${WEBAPP_URL}/event-types/${eventTypeId}?tabName=apps`}
          />
        </>
      ) : appType.some((type) => type === "video") ? (
        <>
          <p style={{ fontWeight: 400, lineHeight: "24px" }}>
            {t("app_disabled_video", { appName })}
          </p>

          <hr style={{ marginBottom: "24px" }} />

          <CallToAction 
            label={t("navigate_installed_apps")} 
            href={`${WEBAPP_URL}/apps/installed`} 
          />
        </>
      ) : appType.some((type) => type === "calendar") ? (
        <>
          <p style={{ fontWeight: 400, lineHeight: "24px" }}>
            {t("admin_has_disabled", { appName })}
          </p>
          <p style={{ fontWeight: 400, lineHeight: "24px" }}>
            {t("disabled_calendar")}
          </p>

          <hr style={{ marginBottom: "24px" }} />

          <CallToAction 
            label={t("navigate_installed_apps")} 
            href={`${WEBAPP_URL}/apps/installed`} 
          />
        </>
      ) : (
        <>
          <p style={{ fontWeight: 400, lineHeight: "24px" }}>
            {t("admin_has_disabled", { appName })}
          </p>

          <hr style={{ marginBottom: "24px" }} />

          <CallToAction 
            label={t("navigate_installed_apps")} 
            href={`${WEBAPP_URL}/apps/installed`} 
          />
        </>
      )}
    </BaseEmailHtml>
  );
};
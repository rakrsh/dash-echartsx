(() => {
  const scriptUrl = document.currentScript?.src;
  const sidebar = document.querySelector(".sidebar-sticky");
  if (!scriptUrl) {
    console.error("[Dash EChartsX] Cannot locate the version-switcher script.");
    return;
  }
  if (!sidebar) {
    console.error("[Dash EChartsX] Cannot locate the documentation sidebar.");
    return;
  }

  const siteRoot = new URL("../../", scriptUrl);
  const manifestUrl = new URL("versions.json", siteRoot);
  fetch(manifestUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Unable to load ${manifestUrl}: HTTP ${response.status}`,
        );
      }
      return response.json();
    })
    .then((manifest) => {
      if (!Array.isArray(manifest)) {
        throw new TypeError("versions.json must contain a list of versions.");
      }

      const versions = manifest
        .filter(
          (version) =>
            version &&
            typeof version.version === "string" &&
            /^(dev|v?\d+\.\d+\.\d+)$/.test(version.version) &&
            typeof version.title === "string",
        )
        .sort((left, right) => {
          if (left.version === "dev") return -1;
          if (right.version === "dev") return 1;
          const a = left.version.replace(/^v/, "").split(".").map(Number);
          const b = right.version.replace(/^v/, "").split(".").map(Number);
          for (let index = 0; index < 3; index += 1) {
            if (a[index] !== b[index]) return b[index] - a[index];
          }
          return 0;
        });

      if (versions.length === 0) {
        throw new Error(
          "versions.json does not contain any supported versions.",
        );
      }

      const pathParts = window.location.pathname
        .slice(siteRoot.pathname.length)
        .split("/")
        .filter(Boolean);
      const currentVersion = versions.some(
        (version) => version.version === pathParts[0],
      )
        ? pathParts[0]
        : versions[0].version;

      const wrapper = document.createElement("div");
      wrapper.className = "version-switcher";

      const label = document.createElement("label");
      label.htmlFor = "dash-echartsx-version";
      label.textContent = "Version";

      const select = document.createElement("select");
      select.id = label.htmlFor;
      select.setAttribute("aria-label", "Documentation version");

      for (const version of versions) {
        const option = document.createElement("option");
        option.value = version.version;
        option.textContent = version.title;
        option.selected = version.version === currentVersion;
        select.append(option);
      }

      select.addEventListener("change", () => {
        const version = versions.find((item) => item.version === select.value);
        if (version) {
          window.location.assign(new URL(`${version.version}/`, siteRoot).href);
        }
      });

      wrapper.append(label, select);
      const brand = sidebar.querySelector(".sidebar-brand");
      if (brand) brand.insertAdjacentElement("afterend", wrapper);
      else sidebar.prepend(wrapper);
    })
    .catch((error) => {
      console.error(
        "[Dash EChartsX] Failed to initialize version switcher.",
        error,
      );
    });
})();

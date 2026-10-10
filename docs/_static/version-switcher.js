(() => {
  const metadata = document.querySelector(
    'meta[name="dash-echartsx-versions"]',
  );
  const sidebar = document.querySelector(".sidebar-sticky");
  if (!metadata || !sidebar) return;

  const data = JSON.parse(metadata.content);
  if (!Array.isArray(data.versions) || data.versions.length === 0) return;
  const versions = [...data.versions].sort((left, right) => {
    if (left.name === "main") return -1;
    if (right.name === "main") return 1;
    return right.name.localeCompare(left.name, undefined, {
      numeric: true,
      sensitivity: "base",
    });
  });

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
    option.value = version.name;
    option.textContent = version.label;
    option.selected = version.name === data.current;
    select.append(option);
  }

  select.addEventListener("change", () => {
    const version = versions.find((item) => item.name === select.value);
    if (version) window.location.assign(version.url);
  });

  wrapper.append(label, select);
  const brand = sidebar.querySelector(".sidebar-brand");
  if (brand) brand.insertAdjacentElement("afterend", wrapper);
  else sidebar.prepend(wrapper);
})();

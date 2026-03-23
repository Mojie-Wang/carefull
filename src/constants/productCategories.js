export const PRODUCT_CATEGORIES = [
  "FIBER",
  "ARMOR PLATE",
  "BODY ARMOR",
  "BALLISTIC HELMET",
  "BALLISTIC SHIELD",
  "ARMOUR",
  "OTHER",
];

export const DEFAULT_PRODUCT_CATEGORY = "BODY ARMOR";

export const LIST_TO_CATEGORY_MAP = {
  Fiber: "FIBER",
  ArmorPlate: "ARMOR PLATE",
  Bodyarmor: "BODY ARMOR",
  BallisticHelmet: "BALLISTIC HELMET",
  BallisticShield: "BALLISTIC SHIELD",
  ARMOUR: "ARMOUR",
};

const CATEGORY_LOOKUP = new Map(
  PRODUCT_CATEGORIES.map((category) => [normalizeCategoryKey(category), category])
);

const CATEGORY_TO_LIST_MAP = Object.fromEntries(
  Object.entries(LIST_TO_CATEGORY_MAP).map(([title, category]) => [category, title])
);

export function normalizeCategoryKey(value) {
  return String(value ?? "")
    .replace(/[^a-z0-9]/gi, "")
    .toUpperCase();
}

export function resolveProductCategory(value) {
  const normalizedValue = normalizeCategoryKey(value);
  return CATEGORY_LOOKUP.get(normalizedValue) ?? DEFAULT_PRODUCT_CATEGORY;
}

export function getListTitleByCategory(value) {
  const category = resolveProductCategory(value);
  return CATEGORY_TO_LIST_MAP[category] ?? "";
}

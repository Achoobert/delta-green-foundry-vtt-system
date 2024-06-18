/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export default async function preloadHandlebarsTemplates() {
  return loadTemplates([
    "systems/deltagreen/templates/actor/actor-sheet.html",
    "systems/deltagreen/templates/actor/limited-sheet.html",
    "systems/deltagreen/templates/actor/unnatural-sheet.html",
    "systems/deltagreen/templates/actor/npc-sheet.html",
    "systems/deltagreen/templates/actor/cv-partial.html",
    "systems/deltagreen/templates/actor/custom-skills-partial.html",
    "systems/deltagreen/templates/dialog/modify-percentile-roll.html",
    "systems/deltagreen/templates/actor/vehicle-sheet.html",
    "systems/deltagreen/templates/actor/help-and-licensing-partial.html",
  ]);
}

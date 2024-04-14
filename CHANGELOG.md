## Release/Patch Notes

### Version 1.4.4 - 2024-04-14

- Fix [GitHub #109] - Typo in Disorder header
- Fix [GitHub #110] - Pregen Agents have wrong skill for "Unarmed Combat" attack, was using "Melee Weapons" insted of "Unarmed Combat". Also changed the expense on it from "Incidental" to "NA".

### Version 1.4.3 - 2024-04-07

- Enhancement [Github #101] - Thanks to 16-Bits and jalensailen for putting together a way to change the sorting to be alphabetical by column instead of by row. Note - you must opt into this behaviour by changing a setting for the system, the default is the original behavior that sorts by rows. Enabling the column sort option better mathes the standard character sheet (although 'type' skills are still in their current position).
- Fix [Github #106] - A bug in the system would change the first 'type' skill's label to the localized version of 'Art - Painting' if it still had the original name that comes with a new character, regardless of it had been edited to something else entirely like 'Science - Physics' or whatnot. This bug unfortuanately effected the import of all the 1001 pregenerated agents in the compendium pack, leading to in some cases even the most harded Special Operator having near world class painting skills. The pregenerated agents were deleted and reformed to fix this. 
- Enhancement [Github #106] while doing previous fix, changed agents so they had the profession stripped off their names ("NURSE-LastName, FirstName" now just "LastName, FirstName). This was originally done to make it easier to see in the compendium which agents were for which profession at a glance. But since compendium packs (and the Foundry VTT CLI) support folders natively now, they were instead sorted into folders matching their profession to make perusing them easier and to clean up the overall list, as picking through 1001 entries could be a bit challenging.

### Version 1.4.2 - 2024-01-28

- Fix for issues around skills reverting to "Art - Painting".
- Added German Translation provided by KarstenW76.

### Version 1.4.1 - 2023-12-13

- Fix [Github #99] - Last round of changes caused checkbox for improvement on type (Art - XXX) skills to disappear, fixed.
- Fix - Pointed out that since items default in with a lethality of 10%, they get a toggle to swap to this on the character sheet from whatever damage was set, and it isn't intuitive that you must set the lethality to 0% to hide this toggle.

### Version 1.4.0 - 2023-12-10

- Feature [Github #70] - Added ability to track and roll Special Training.
- Enhancement - Slight restyle of Skill section of sheet, saving space.

### Version 1.3.5 - 2023-11-20

- Working on improving the process for packing a new build, but some things have gone wrong. So no actual changes here, just iterating forward on the build to avoid some issues that cropped up.

### Version 1.3.3 - 2023-10-17

- Fix [Github #93] - Custom target numbers for weapons can now be set correctly.

### Version 1.3.2 - 2023-10-07

- Enhancement - When hitting a breakpoint, current SAN now turns bold and red, to help indicate you need to reset your breaking point.
- Fix [Github #86] - You can now right-click again to get the modify roll dialog, instead of just shift-click.
- Fix [Github #87] - SAN rolls are hidden properly again if GM chooses.
- Fix [Github #97] - Fixed broken tooltip on SAN that did not show current break point anymore.

### Version 1.3.1 - 2023-09-23

- Enhancement - Changed pause icon to be Delta Green logo.

### Version 1.3.0 - 2023-09-23

- Enhancement - Refactor roll system to make future changes easier.
- Enhancement - Slight restyle of roll chat messages.
- Enhancement - Restyled actor sheets to be more in-line with the core book's design. You can change back to the old style in the settings for the Delta Green system.
- Enhancement[GitHub #72] - Weapons can now have modifiers for their rolls built-in.
- Enhancement - Weapons can choose a custom target for their rolls. This can be used for unnatural creature attacks that may not line up with one of the skills.
- Fix - Damage rolls can now utilize math functions like base Foundry rolls.
- Enhancement - Hide untrained skills toggle turned into toggleable eye icon rather than a checkbox.

### Version 1.2.6 - 2023-09-13

- Fix [Github #82] - New packaging workflow from @jalensailin will hopefully resolve issues with the Forge by deploying the v11 compendium packs directly.

### Version 1.2.5 - 2023-09-09

- Fix - Removing more places where system still says 'Unofficial' at Arc Dream's request

### Version 1.2.4 - 2023-08-03

The system is now officially recognized by Arc Dream!

- Enhancement[GitHub #77] - Changed some English localization labels and the legalese, per Arc Dream's request.
- Fix - Fixed layout bug on bond sheet.
- Enhancement[GitHub #78] - Added checkbox to bonds on the Agent sheet that you can use to indicate if the bond has been damaged since the last home scene. Also added a button to allow clearing the checkbox on all bonds.
- Enhancement [GitHub #80] - Can now roll SAN Damage from unnatural sheet
- Enhancement [GitHub #81] - You can now hide the Impossible Landscapes specific fields from the Agent's sheet by changing a system setting.

### Version 1.2.2 - 2023-07-20

- Enhancement [Github #76] - jalensailin added drag drop functionality to items. If you hold alt and drag, it will automatically delete the item from the original sheet. Otherwise, it will duplicate the item.
- Fix [Github #74] - jalensailin fixed issue with Portuguese (Brasil) translation.

### Version 1.2.0 - 2023-06-28 [BREAKING CHANGE: THIS VERSION FORWARD COMPATIBLE WITH FOUNDRY V11 OR HIGHER ONLY!]

- Fix [GitHub #71] - Fix for the update skill button does not work in Foundry V11.
- Fix - Dragging items from one sheet to another now does create the item on the other sheet, although it does not delete the item on the original character sheet.
- Enhancement - (Work in Progress) Added macro to parse a DG stat block. Currently only works for English, and only gets core attributes and skills. Call from a macro like: game.deltagreen.ParseDeltaGreenStatBlock()

### Version 1.1.0 - 2022-09-11 [BREAKING CHANGE: THIS VERSION FORWARD COMPATIBLE WITH FOUNDRY V10 OR HIGHER ONLY!]

- Enhancement - Update to new data model for Foundry V10. This breaks compatibility with older versions, but leaves the system in a better place for future updates. Thanks to Jailensailen for help with this effort.
- Enhancement [GitHub 39] - Jailensailen added a way to toggle lethality directly on the actor sheet without editing the item. There is now a toggle button beside the damage formula/lethality percentage.
- Enhancement [GitHub #56] - Added an actor sheet for Vehicles
- Fix [GitHub #66] - Dragging item macros to hot bar, as well as executing them seemed to be broken.
- Fix [GitHub #62] - Fixed issue with how weapon skill rolls are displayed in chat cards (incorrectly appended 'x5' to rolls that were not x5 rolls).
- Enhancement [GitHub #58] - Did not completely overhaul Agent sheet per request, but did implement some of the requested changes to make the Agent/NPC sheets shorter, so that they require less scrolling when on smaller screens. Thanks to wush3 for providing some of the CSS for this.
- Enhancement - Made a few improvements to improvements to layout for a few of the item and NPC sheets.

### Version 1.0.6 - 2022-05-26

- Enhancement - IgorAK25 has submitted a Portuguese translation for the system.

### Version 1.0.5 - 2022-03-20

- Enhancement [GitHub #53] - Added all physical attributes (on top of DEX) as options for the test for a weapon, to accomodate a special weapon in the Jack Frost module.
- Enhancement - Put a little dice icon next to the SAN label to make it more obvious that is how you roll a SAN test on the Agent's sheet.
- Enhancement - Added some buttons to the gear tab of the Agent's sheet that allow opening the compendiums for weapons or armor directly from the sheet.
- Enhancement - Made tabs in nav bar, look a little bit more obviously like tabs.
- Enhancement - Made it so that existing type skills are more editable now, to make using the pregens that have craft/language/science skills easier.
- Enhancement - Added some GM-only fields to the CV section of the Agent and NPC sheets that supports values recording in Impossible Landscapes

### Version 1.0.4 - 2022-02-05

- Fix [GitHub #50] - The custom background images used on the Actor sheets was also showing up for other free-floating windows, such as when the encounter tracker is undocked. Because of the bright background, it was hard to read the text or see buttons, so have changed the CSS to try to exclude these windows from the custom background image.
- Fix [GitHub #43] - Bond Scores on Agent Pregens from u/jets_or_chasm fixed to correctly match charisma score of the agent. Also re-created the compendium using a newer version of the pregen sheet that has more

### Version 1.0.3 - 2022-02-04

- Other - Update compatible version to v9 (Note - this update could potentially have some effects on older Foundry versions)
- Fix [GitHub #48] - The new system option to hide SAN score was not also hiding Ritual proficiency, making it trivial to back-calculate the SAN score for players that know the formula for the Ritual skill.
- Fix [GitHub #50] - In Foundry v9, seems like the sections below the nav were anchored to the bottom of the window, so as the window got bigger the section would float away from the nav leaving a big gap. Attempted to fix CSS for this by setting how the grid should flex more specifically.

### Version 1.0.2 - 2021-11-04

- Fix - Pregen Agents were getting duplicated Unarmed Strike items added on creation.
- Fix - Unarmed Strike item in the compendium was using 'Melee Combat' instead of 'Unarmed Combat' as its skill.
- Enhancment - Added system option for a world to make SAN target and skill rolls hidden from non-GM players. SAN tests change to blind rolls for players who are not GM.

### Version 1.0.1 - 2021-08-14

- Fix [GitHub #31] - Default Type Skill of Art-Painting that is added automatically when making a new agent should be localizable now.
- Enhancement - Added a separate Actor type and sheet for _Unnatural_ creatures and a similar sheet that for non-agent NPC characters.
- Enhancement - The system will try to automatically add an 'Unarmed Attack' item to a new agent when they are created to make it more obvious how this is handled within the system. [Update - accidentally had this disabled in logic when packaging system, will re-add later...]
- Enhancement - DEX x5 is now selectable as an option to roll for a weapon's skill test, which is useful for items like hand grenades that are rolled or thrown.
- Enhancement - Eduard Cot (trombonecot) submitted a Catalan language pack for the system.
- Enhancement - Added list of Pregen Agents (originaly from Reddit user u/jets_or_chasm, AKA jimstorch) as a compendium pack to allow a player to jump back in quickly after a death, or to make playing for the first time easier by presenting a list of agents of 24 professions. See <https://github.com/jimstorch/DGGen> for more information.
- Enhancement - Added some roll tables that allow making Fall of Delta Green-style Operation Code names (e.g. 'Operation Able Archer'). These tables are based on roll tables created by Reddit user u/Travern. Note - there is also a compendium with a macro that will randomly pick a combination of the tables, then draw from those tables to make a random 2-part operation name to send to the chat.

### Version 1.0.0 - 2021-06-05 [BREAKING CHANGE: THIS VERSION FORWARD COMPATIBILE WITH FOUNDRY 0.8.6 OR HIGHER ONLY!!!]

- Changes to support 0.8.6+ Foundry

  - Revamped data model for actor sheet. Note due to the changes, the new system is not backwards compatible with older versions of Foundry now.
  - Rolls all asynchronous now. Should allow less work to be required in future versions when asynchronous rolls are required.

- Enhancement - Roll Modifier Dialogues

  - Added option to choose roll mode in the roll modifier dialogue for both percentile/lethality tests and damage rolls.
  - Can now SHIFT+CLICK to get the Roll Modifier Dialogue for LUCK rolls. Cannot seem to make it feasible to get the right-click option to work on the menu currently.
  - Changed d100 Roll Modifier dialogue to have a +/- dropdown instead of needing to type it into the box.

- Enhancement - Based on a character's strength, formula will automatically adjust for Melee and Unarmed damage rolls per the rules on page 55 of the Agent's Handbook (+1 for 13-16 STR, etc...). **NOTE** - Some adjustment to damage formulas on existing weapons may need to be made if it was manually added already.

- Enhancement - Added a descriptor field 'Relationship' to bonds, so you can give a name, and then optionally the relationship (e.g. 'Mother', 'Friend') as two separate fields. Makes discerning who is who on the bonds sheet easier at a glance.

- Enhancement - More CSS Improvements, mostly to Item Sheets.
  - Cleaned up layout on bonds, armor, weapons, gear item sheets
  - Made weapons, armor and gear Item Sheets slightly more uniform in how the same fields are laid out.

### Version 0.9.9 - 2021-03-27

- Fix - [GitHub #23] - Localization mistake, had two spaces in between "Critical" and "Success" or "Failure" in chat cards.
- Fix - [GitHub #24] - The chat card that was generated from rolling a skill check by clicking on a weapon (e.g. Firearms for a pistol) was not being localized. Fixed this along with a related tooltip that wasn't being localized either.
- Fix - [GitHub #25] - The chat card for damage and lethality was not bolding those terms like it would for other skill or percentile rolls.
- Fix - [GitHub #26] - When clicking on the 'Roll Luck' button in the character sheet header, the resulting chat card was not being localized properly.
- Fix - [GitHub #27] - Using a language setting that did not have a full translation was breaking adding skills to the agent's actor sheet. Should not break quite so quickly now, but will likely need a better long term fix at some point.
- Fix - [GitHub #28] - Missing localization keys for break point tooltips added.
- Fix - Made Agent sheet default width a little wider so skills with longer names aren't getting clipped off. Also a few other alignment fixes in the CSS.

- Enhancement - [GitHub #28] - Spanish language translation, many thanks to CthulhuRol for providing it!
- Enhancement - Added a macro that allows for rolling the skill check on a weapon, so there can be macro buttons for both the damage and the skill check if desired.
  - Sample syntax: game.deltagreen.rollItemSkillCheckMacro("Combat Dagger");
- Enhancement - Thanks to _Uriele_ - Added functionality from the Handler's Guide (page 188) for 'Inhuman' stat tests, test where the stat (e.g. CON) is 20 or higher, giving a x5 target of 100 or higher. In this event, the test auto succeeds on a roll of anything other than 100, and a roll lower than the stat value is a critical (along with regular critical logic).
- Enhancement - Added 'Ritual' skill, which is calculated and is equal to 99 - current sanity (thanks to _Uriele_ for mentioning it). See page 166 under 'Ritual Activation' for the full rules.
- Enhancement - Total protection rating of all _equipped_ armor now displayed by HP.

- Font and Background Change and Configuration Options - _NOTE THIS CAN BE CHANGED IN THE SYSTEM SETTINGS BACK TO WHAT IT WAS!_
  - Enhancement - Added system setting for font choice, with a few options. For example you can set a world to use typewriter style font for an older feel.
  - Enhancement - Added system setting for background image choice, with a few options. Changed default from normal Foundry parchment to a lighter, more moder looking paper. Also included option for old, used/crinkled paper for a more unsettling or hard-used look.

### Version 0.9.7

- Enhancement - Can now click on the icon for armor/other gear to equip or unequip it.
- Enhancement - Changed so that players with the 'Limited' permission on an actor now only see the C.V. tab of the actor's character sheet, instead of the entire sheet. Previously the 'Limited' permission and the 'Observer' permission gave the same result. The 'Observer' permission is unchanged and still shows a read-only view of the entire sheet.
- Enhancement - Added ability to alter formula for damage rolls by either **right clicking** _or_ **holding shift and left clicking**.
- Enhancement - Added ability to alter targets for tests by either **right clicking** _or_ **holding shift and left clicking**. Applies to the following rolls:
  - Skill tests
  - Attribute tests
  - Lethality tests
- Improved CSS on actor sheet in a few places.
  - New Font (was previously in style sheet, but not properly applied).
  - Nav bar alignment/border consistent across tabs for a cleaner look moving between sections.
  - Gear sheet alignment cleaner with certain fields now being centered.
  - CV sheet now has some padding on fields so things aren't so cramped looking.
- Fix - Thanks to @Hrunh for submitting update to localization in item sheet
- Fix - typo in Alertness skill (English locale), thanks to roestrei for report

### Version 0.9.6

- Incremented Core Compatible Version after testing against release version of Foundry 0.7.5.
- Made the gear section a little less ugly by adding some nicer section dividers.
- Fixed some awkward tooltip wording.

### Version 0.9.4

- Fix - Pharmacy and Surgery skills were missing.
- Fix - Accounting and Disguise base skill rating were 0%, should be 10%.
- Fix - Damage on medium pistol in compendium was wrong, also fixed some base range values that were off.
- Enhancement - Adding support for localization. Character sheet and items sheets (gear, bonds, etc.) should be localized now, but not the compendium packs.
- Workaround - The (current alpha) 7.2 Foundry release seems to have a bug where rolls without a leading number ('d100') do not work, so updated all skill checks to roll '1d100' instead to avoid the issue.
- Enhancement - Added support for Dice So Nice module, since moving to custom chat message broke out of the box compatibility with it.

### Version 0.9.3

We will never speak of 0.9.1 or 0.9.2 ever again.

### Version 0.9.1

Added a few compendium packs with some common armor and weapon choices for Agents to equip themselves with.

Note that weapon/armor statistics are not covered by the Open Game License like the other rules used in the system, they are included as an exception with permission from Arc Dream publishing.

### Version 0.9.0

Basic system functionality complete and submitted to Foundry VTT as an official system.

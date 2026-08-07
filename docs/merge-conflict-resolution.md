# Merge Conflict Resolution Documentation

## Participants

- Student 1: Melani Adithya
- Student 2: Maneesha Kavindi

## Conflicted File

`README.md`

## Cause of the Conflict

Both students edited the same section of the README file using separate feature branches.

Student 1 added one version of the content, while Student 2 added another version before pulling the latest changes from the `develop` branch.

Git could not automatically decide which version should be kept, so a merge conflict occurred.

## Conflict Markers

The conflict appeared similar to this:

```text
<<<<<<< HEAD
Content added by Maneesha Kavindi
=======
Content added by Melani Adithya
>>>>>>> develop
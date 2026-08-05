# Apprentice+ Review Transfer Starter

This is a working standalone review-transfer module, not a merge into the full Apprentice+ repository.

It demonstrates:

- generating a pseudonymised Apprentice+ -> Assessor+ snapshot;
- creating a QR code and `.apreview` file;
- excluding direct personal identifiers;
- importing the completed Assessor+ -> Apprentice+ review outcome;
- displaying the agreed targets and next review date.

To integrate it into Apprentice+, the actual current Apprentice+ ZIP is required. The reusable logic is in `review-transfer.js`.


## V2.0
Learner profile Maths and English college-attendance controls now govern whether ReviewMate may create Functional Skills Academy targets.

/*
 * Naval Group License Version 1.1
 *
 * Copyright (c) 2020-2022 Naval Group SA property, all rights reserved.
 *
 * Both the content and the form of this software are the property of Naval Group
 * and/or of third party. It is formally prohibited to use, copy, modify,
 * translate, disclose or perform all or part of this software without obtaining
 * Naval Group's prior written consent or authorization. Any such unauthorized
 * use, copying, modification, translation, disclosure or performance by any
 * means whatsoever shall constitute an infringement punishable by criminal or
 * civil law and, more generally, a breach of Naval Group's rights.
 */
import argv from "yargs";
import dtrack from "@dependency-track/bom";
import { config } from "@dependency-track/bom/config";
import process from "node:process";

import { name } from "../package.json";
import { version } from "../package.json";

const projectName = name;
const projectVersion = version;

if (argv.apiKey) {
  config.apiKey = argv.apiKey;
} else {
  config.apiKey = process.env.DTRACK_APIKEY;
}

config.baseUrl = argv.baseUrl;
config.projectName = projectName;
config.projectVersion = projectVersion;
config.bomFilepath = "./bom.xml";

dtrack.uploadbom().then(
  () => {
    process.exit();
  },
  (reject) => {
    console.log(reject);
    process.exit(-1);
  }
);

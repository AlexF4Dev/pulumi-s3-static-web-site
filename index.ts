import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";
import * as staticwebsite from '@pulumi/aws-static-website';

const site = new staticwebsite.Website("website", {
    withCDN: true,
    sitePath: "./www",
    targetDomain: "valid domain name",
    withLogs: true,
    cacheTTL: 600,
});

export const url = site.websiteURL;
'use strict';

function SemverException(message) {
  this.message = message;
  this.name = 'SemverException';
}

function isValidVersion(v) {
  return !(v < 0 || !(Math.round(v) === v));
}

module.exports = class Semver {
  constructor(major, minor = 0, patch = 0) {

    if (!isValidVersion(major) || !isValidVersion(minor) || !isValidVersion(patch)) {
      throw new SemverException();
    }

    this.major = major;
    this.minor = minor;
    this.patch = patch;
  }
  getMajor() {
    return `${this.major}`;
  }
  getMinor() {
    return `${this.minor}`;
  }
  getPatch() {
    return `${this.patch}`;
  }
  getVersion() {
    return `${this.getMajor()}.${this.getMinor()}.${this.getPatch()}`;
  }
  equals(semver) {
    if (!(semver instanceof Semver)) return false;
    return this.getVersion() === semver.getVersion();
  }
}

module.exports.SemverException = SemverException;
module.exports.isValidVersion = isValidVersion;

import AWS from 'aws-sdk';

class Transcribe {
  async create(req, res) {
    // var params = {
    //   LanguageCode: en-US | es-US | en-AU | fr-CA | en-GB | de-DE | pt-BR | fr-FR | it-IT | ko-KR | es-ES | en-IN | hi-IN | ar-SA | ru-RU | zh-CN, /* required */
    //   Media: { /* required */
    //     MediaFileUri: 'STRING_VALUE'
    //   },
    //   TranscriptionJobName: 'STRING_VALUE', /* required */
    //   MediaFormat: mp3 | mp4 | wav | flac,
    //   MediaSampleRateHertz: 'NUMBER_VALUE',
    //   OutputBucketName: 'STRING_VALUE',
    //   OutputEncryptionKMSKeyId: 'STRING_VALUE',
    //   Settings: {
    //     ChannelIdentification: true || false,
    //     MaxSpeakerLabels: 'NUMBER_VALUE',
    //     ShowSpeakerLabels: true || false,
    //     VocabularyName: 'STRING_VALUE'
    //   }
    // };

    const transcribe = new AWS.TranscribeService();
    await transcribe.startTranscriptionJob().promise();
    return res.json();
  }
}

export default new Transcribe();

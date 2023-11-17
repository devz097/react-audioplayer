<p align="center">
  <img alt="logo" src="./assets/logo.png" width="100" max-width="100%">
</p>

<h1 align="center">Audio React Player</h1>

* Audio player component that provides consistent UI/UX on different browsers.
* Super customizable layout
* Flexbox css with SVG icons. Mobile friendly.
* I18n and a11y supported, keyboards events supported.
* Support Media Source Extensions (MSE) and Encrypted Media Extensions (EME)
* Written in TypeScript.

![screenshot](./assets/screenshot.png)

Supported browsers: Chrome, Firefox, Safari, Edge

#### Keyboard shortcuts (When audio player focused)

They can be turned off by setting `hasDefaultKeyBindings` prop to `false`

| Key binding | Action |
| ----------- | ------ |
| Space       | Play/Pause |
| ←           | Rewind |
| →           | Forward |
| ↑           | Volume up |
| ↓           | Volume down |
| L           | Toggle loop |
| M           | Toggle mute |

## Props

### HTML Audio Tag Native Attributes

| Props       |  Type                          |  Default  | Note |
| ----------- | ------------------------------ | --------- | ---- |
| src         | string                         | ''        | |
| preload     | 'auto' \| 'metadata' \| 'none' | 'auto'    | |
| autoPlay    | boolean                        | false     | Won't work on most mobile devices |
| loop        | boolean                        | false     | |
| muted       | boolean                        | false     | |
| volume      | number                         | 1.0       | Won't work on most mobile devices |
| crossOrigin | string                         | undefined | |
| mediaGroup  | string                         | undefined | |


More native attributes detail: [MDN Audio element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)

The `controls` attribute defaults to `false` and should never be changed to `true` because this library is already providing UI.

### UI/UX Props

| Props                    | Type              | Default | Note |
| ------------------------ | ----------------- | ------- | ---- |
| showSkipControls         | boolean           | false   | Show Previous/Next buttons |
| showJumpControls         | boolean           | true    | Show Rewind/Forward buttons |
| showDownloadProgress     | boolean           | true    | Show download progress over progress bar |
| showFilledProgress       | boolean           | true    | Show filled (already played) area on progress bar |
| showFilledVolume         | boolean           | false   | Show filled volume area on volume bar |
| hasDefaultKeyBindings    | boolean           | true    | Whether has default keyboard shortcuts |
| autoPlayAfterSrcChange   | boolean           | true    | Play audio after `src` is changed, no matter `autoPlay` is `true` or `false` |
| volumeJumpStep           | number            | 0.1     | Indicates the volume jump step when pressing up/down arrow key, volume range is `0` to `1` |
| progressJumpStep         | number            | 5000    | **Deprecated, use progressJumpSteps.** Indicates the progress jump step (ms) when clicking rewind/forward button or left/right arrow key |
| progressJumpSteps        | object            | `{ backward: 5000, forward: 5000 }`    | Indicates the progress jump step (ms) when clicking rewind/forward button or left/right arrow key|
| progressUpdateInterval   | number            | 20      | Indicates the interval (ms) that the progress bar UI updates,  |
| listenInterval           | number            | 1000    | Indicates the interval (ms) to call the `onListened` prop during playback |
| defaultCurrentTime       | ReactNode         | '--:--' | Default display for audio's current time before src's meta data is loaded |
| defaultDuration          | ReactNode         | '--:--' | Default display for audio's duration before src's meta data is loaded |
| timeFormat               | 'auto' \| 'mm:ss'<br>\| 'hh:mm:ss' | 'auto' | Time format for both current time and duration. `'auto'` means when duration is greater than one hour, time format is `hh:mm:ss`, otherwise it's `mm:ss` |
| header                   | ReactNode         | null    | Header of the audio player |
| footer                   | ReactNode         | null    | Footer of the audio player |

### Event Props

Supported media events: `onPlay`, `onPause`, `onEnded`, `onSeeking`, `onSeeked`, `onAbort`, `onCanPlay`, `onCanPlayThrough`, `onEmptied`, `onError`, `onLoadStart`, `onLoadedMetaData`, `onLoadedData`, `onPlaying`, `onSuspend`, `onWaiting`, `onVolumeChange`

Docs: [Media Events | MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events)

Note: `onTimeUpdate` is not supported. Please use `onListen` with `listenInterval` for better performance.

#### Other events

| Props                    | Type              | Default | Note |
| ------------------------ | ----------------- | ------- | ---- |
| onClickPrevious          | Function (Event)  | null    | Called when click Previous button |
| onClickNext              | Function (Event)  | null    | Called when click Next button |
| onListen                 | Function (Event)  | null    | Called every `listenInterval` milliseconds during playback |
| onPlayError              | Function (Error)  | null    | Called when there's error invoking `audio.play()`, it captures error that `onError` won't catch |
| onChangeCurrentTimeError | Function ()       | null    | Called when dragging progress bar or press rewind/forward while the audio hasn't loaded yet |

## UI Overwrites

Besides using props to change UI, React H5 Audio Player provides built-in class names and SASS/LESS variables for developers to overwrite.

### Access to the audio element

You can get direct access to the underlying audio element. First get a ref to ReactAudioPlayer:

```jsx
this.player = createRef()

<ReactAudioPlayer ref={this.player} />
```

Then you can access the audio element like this:

`this.player.current.audio.current`

### Media Source Extensions and Encrypted Media Extensions

You can use [Media Source Extensions](https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API) and [Encrypted Media Extensions](https://developer.mozilla.org/en-US/docs/Web/API/Encrypted_Media_Extensions_API) with this player. You need to provide the complete duration, and also a onSeek and onEncrypted callbacks. The logic for feeding the audio buffer and providing the decryption keys (if using encryption) must be set in the consumer side. The player does not provide that logic. 

## How to contribute

Issues and PR's are welcome.